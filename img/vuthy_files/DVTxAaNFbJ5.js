if (self.CavalryLogger) { CavalryLogger.start_js(["NFc7G"]); }

__d("XGoodwillDailyDialogueGreetingHeaderTappedAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/dd\/greeting\/headertapped\/",{});}),null);
__d('GoodwillGreetingsHeaderTapController',['Event','URI','AsyncRequest','goURI','XGoodwillDailyDialogueGreetingHeaderTappedAsyncController'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={logging:function i(j,k){c('Event').listen(j,'click',function(event){event.preventDefault();event.stopPropagation();var l=c('XGoodwillDailyDialogueGreetingHeaderTappedAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))(l).setMethod('POST').setData({lightweight_unit_type:k.lightweight_unit_type,lightweight_unit_id:k.lightweight_unit_id,lightweight_extra:k.lightweight_extra}).setFinallyHandler(function(){var m=j.getAttribute('href'),n=j.getAttribute('rel'),o=new (c('URI'))(m==='#'?j.getAttribute('ajaxify'):m);if(n!==null){new (c('AsyncRequest'))(o).setMethod('GET').setReadOnly(true).send();}else c('goURI')(o);}).send();});}};f.exports=h;}),null);
__d('GoodwillDailyDialogueAutoHideUnit',['OnVisible.react','React','ReactDOM'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.state={lastViewTime:0,toHide:false},this.$GoodwillDailyDialogueAutoHideElement1=function(){this.props.onVisible();this.setState({lastViewTime:Date.now()});}.bind(this),this.$GoodwillDailyDialogueAutoHideElement2=function(){if(Date.now()-this.state.lastViewTime>this.props.minViewTime)this.setState({toHide:true});if(this.state.toHide)this.props.onHide();}.bind(this),n;}k.prototype.render=function(){return c('React').createElement(c('OnVisible.react'),{onVisible:this.$GoodwillDailyDialogueAutoHideElement1,onHidden:this.$GoodwillDailyDialogueAutoHideElement2},c('React').createElement('div',{className:this.props.className}));};k.propTypes={className:j.string.isRequired,minViewTime:j.number.isRequired,onHide:j.func.isRequired,onVisible:j.func.isRequired};function l(m,n,o){this.$GoodwillDailyDialogueAutoHideUnit1=m;this.$GoodwillDailyDialogueAutoHideUnit2=n;this.$GoodwillDailyDialogueAutoHideUnit3=function(){'function'===typeof o.onHide&&o.onHide();this.unmount();}.bind(this);this.$GoodwillDailyDialogueAutoHideUnit4='function'===typeof o.onVisible?o.onVisible:function p(){};}l.prototype.mount=function(m){c('ReactDOM').render(c('React').createElement(k,{className:this.$GoodwillDailyDialogueAutoHideUnit1,minViewTime:this.$GoodwillDailyDialogueAutoHideUnit2,onVisible:this.$GoodwillDailyDialogueAutoHideUnit4,onHide:this.$GoodwillDailyDialogueAutoHideUnit3}),m);this.$GoodwillDailyDialogueAutoHideUnit5=m;};l.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.$GoodwillDailyDialogueAutoHideUnit5);};f.exports=l;}),null);
__d("XGoodwillDailyDialogueGreetingViewedAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/dd\/greeting\/viewed\/",{});}),null);
__d('GoodwillGreetingsViewController',['AsyncRequest','GoodwillDailyDialogueAutoHideUnit','XGoodwillDailyDialogueGreetingViewedAsyncController'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={hideAfterView:function i(j,k,l){var m=function n(){var o=new Date().getHours(),p=c('XGoodwillDailyDialogueGreetingViewedAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(p).setData({lightweight_unit_type:l.lightweight_unit_type,lightweight_unit_id:l.lightweight_unit_id,lightweight_extra:l.lightweight_extra,current_hour:o}).setMethod('POST').send();};new (c('GoodwillDailyDialogueAutoHideUnit'))(l.class_name,l.min_view_time,{onVisible:m}).mount(k);}};f.exports=h;}),null);