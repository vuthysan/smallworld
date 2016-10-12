if (self.CavalryLogger) { CavalryLogger.start_js(["hdhQL"]); }

__d('ErrorSignal',['AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','SessionName','ScriptPath','SiteData','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=true;function i(m,n){if(m&&m==='beacon_error'){c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:m,m:n}).send();return;}else if(m&&m==='async_error'){var o=JSON.parse(n),p=o.err_code,q=o.path;if(p in {'1004':1,'12029':1,'12031':1,'12152':1}&&q.indexOf('scribe_endpoint.php')==-1){new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:n}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);return;}}if(m==='javascript_error')c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:m,m:n}).send();}function j(m,n){n=n||{};n.svn_rev=c('SiteData').revision;n.push_phase=c('SiteData').push_phase;n.script_path=c('ScriptPath').getScriptPath();n.extra=n.extra||{};n.extra.hrm=c('SiteData').be_mode;if(h&&m==='onerror'){n.extra.extra.push('first_error');h=false;}var o=(c('SessionName').getName()||'-')+'/-';i('javascript_error',JSON.stringify({c:m,a:o,m:n}));}function k(){var m='beacon_error',n=(c('SessionName').getName()||'-')+'/-',o={};o.error=m;o.svn_rev=c('SiteData').revision;o.push_phase=c('SiteData').push_phase;o.script_path=c('ScriptPath').getScriptPath();o.extra={message:m,type:'info'};i(m,JSON.stringify({c:m,a:n,m:o}));}var l={sendBeaconErrorSignal:k,sendErrorSignal:i,logJSError:j};f.exports=l;b.ErrorSignal=l;}),null);
__d('FeedLoadEventWWWLogger',['Arbiter','BanzaiLogger','ErrorSignal','ErrorUtils','LitestandMessages','PageletEventConstsJS','URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=['substream_','more_pager_pagelet_','pagelet_composer','pagelet_navigation','pagelet_rhc_footer'],i=[c('PageletEventConstsJS').ARRIVE_END,c('PageletEventConstsJS').DISPLAY_END,c('PageletEventConstsJS').ONLOAD_END],j=['pre_page_transition','page_transition'],k=[c('LitestandMessages').NEWSFEED_LOAD,c('LitestandMessages').STORIES_REQUESTED,c('LitestandMessages').STORIES_INSERTED,c('LitestandMessages').NEWER_STORIES_REQUESTED,c('LitestandMessages').NEWER_STORIES_INSERTED,c('LitestandMessages').STREAM_LOAD_ERROR,c('LitestandMessages').STREAM_LOAD_RETRY,c('LitestandMessages').DUPLICATE_CURSOR_ERROR],l=false;function m(q){return q&&(q.getPath()==='/'||q.getPath()==='/home.php');}function n(q){c('BanzaiLogger').log('WebFeedLoadLoggerConfig',q);}function o(q){if(!q)return null;if(q.indexOf('more_pager_pagelet_')===0)return 'more_pager_pagelet_n';if(q.indexOf('substream_')===0&&q!=='substream_0'&&q!=='substream_1')return 'substream_n';return q;}var p={init:function q(){if(l)return;c('Arbiter').subscribe('BigPipe/init',function(r,s){if(!s||!s.arbiter)return;s.arbiter.subscribe('pagelet_event',function(t,u){if(u&&m(c('URI').getNextURI())&&i.indexOf(u.event)>=0&&h.some(function(v){return u.id.indexOf(v)===0;}))n({event:'pagelet',pagelet_id:o(u.id),pagelet_event_type:u.event,pagelet_phase:u.phase.toString()});});});c('Arbiter').subscribe(j,function(r,s){if(s){var t=s.to||s.uri;if(m(t))n({event:'page_transition',transition_event_type:r});}});c('Arbiter').subscribe(k,function(r,s){var t=null,u=null;if(r===c('LitestandMessages').STREAM_LOAD_ERROR){t=s;}else if(r===c('LitestandMessages').DUPLICATE_CURSOR_ERROR)u=s;n({event:'stream_load',stream_event_type:r,stream_cursor:u,stream_substream_id:o(s&&s.substream_id),error_name:t&&t.name,error_message:t&&t.message,error_stack:t&&t.stack});});c('ErrorUtils').addListener(function(r){if(r&&m(c('URI').getNextURI())){c('ErrorSignal').logJSError('feedloaderror',{error:r.name||r.message,extra:r});n({event:'js_error',error_name:r.name,error_message:r.message,error_stack:r.stack});}});l=true;}};f.exports=p;}),null);