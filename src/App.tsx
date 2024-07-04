import ChatAiWidget, {
  ChatAiWidgetProps,
} from './components/widget/ChatAiWidget';

const App = (props: ChatAiWidgetProps) => {
  return (
    <ChatAiWidget
      applicationId={'5F533BB6-D6BB-4C90-A429-B9DAEDBEAD54'}
      botId={'CABfbliQp7WN-6wa0FFFo'}
      apiHost={'https://api-no2.sendbirdtest.com'}
      wsHost={'wss://ws-no2.sendbirdtest.com'}
      userNickName={props.userNickName}
      betaMark={props.betaMark}
      customBetaMarkText={props.customBetaMarkText}
      suggestedMessageContent={props.suggestedMessageContent}
      firstMessageData={props.firstMessageData}
      createGroupChannelParams={props.createGroupChannelParams}
      chatBottomContent={props.chatBottomContent}
      messageBottomContent={props.messageBottomContent}
      replacementTextList={props.replacementTextList}
      customRefreshComponent={props.customRefreshComponent}
      userId={'js_form_v2_test_user'}
      sessionToken={'7d5f010f83c2d85329f575ca9779dcb0301c4b1e'}
      configureSession={() => ({
        onSessionTokenRequired: () =>
          '7d5f010f83c2d85329f575ca9779dcb0301c4b1e',
      })}
      stringSet={props.stringSet}
      enableSourceMessage={props.enableSourceMessage}
      enableEmojiFeedback={props.enableEmojiFeedback}
      enableMention={props.enableMention}
      customUserAgentParam={props.customUserAgentParam}
      autoOpen={props.autoOpen}
      renderWidgetToggleButton={props.renderWidgetToggleButton}
      serviceName={props.serviceName}
      deviceType={props.deviceType}
      enableResetHistoryOnConnect={props.enableResetHistoryOnConnect}

      // messageInputControls={{
      //   blockWhileBotResponding: false,
      // }}
      // dateLocale={ar}
      // callbacks={{
      //   onWidgetExpandStateChange: (newIsExpanded) => {
      //     console.log('## newIsExpanded: ', newIsExpanded);
      //   },
      // }}
      // botStudioEditProps={{
      //   botInfo: {
      //     profileUrl: 'url',
      //     nickname: 'Super bot',
      //   },
      //   aiAttributes: {
      //     legend: 'this is legend',
      //   },
      //   welcomeMessages: [
      //     {
      //       message: 'hello',
      //     },
      //     {
      //       message: 'how can I help you?',
      //     },
      //     {
      //       message: 'ewfweweoijweofijfoi',
      //       suggestedReplies: ['wwfwefwefwefee', 'reply2', 'reply3'],
      //     },
      //   ],
      //   styles: {
      //     theme: 'light',
      //     accentColor: '#FF7F50',
      //     botMessageBGColor: '#ff0095',
      //   },
      //   suggestedRepliesDirection: 'vertical',
      // }}
      // widgetOpenState={true}
      // onWidgetOpenStateChange={(props) => {
      //   console.log('## onChatOpenStateChange: ', props);
      // }}
    />
  );
};

export default App;
