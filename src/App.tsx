import React from 'react';

import { StringSet } from '@uikit/ui/Label/stringSet';

import ChatAiWidget from './components/widget/ChatAiWidget';
import { ToggleButtonProps } from './components/widget/WidgetToggleButton';
import { Constant } from './const';

interface Props extends Omit<Partial<Constant>, 'stringSet'> {
  applicationId: string;
  botId: string;
  autoOpen?: boolean;
  renderWidgetToggleButton?: (props: ToggleButtonProps) => React.ReactElement;
  stringSet?: Partial<StringSet>;
}

/**
 * Leave comments below for testing
 */
const App = (props: Props) => {
  return (
    <ChatAiWidget
      applicationId={props.applicationId}
      botId={props.botId}
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
      userId={props.userId}
      configureSession={props.configureSession}
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
