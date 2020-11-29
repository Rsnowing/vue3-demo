import { createApp } from 'vue';
import Message from './index.vue';
export type MessageType = 'success' | 'error' | 'default';

interface ParamsProps {
  message: string;
  type: MessageType;
  timeout?: number;
}
export default function message(params: ParamsProps) {
  const { message, type, timeout = 2000 } = params;
  const messageInstance = createApp(Message, { message, type });
  const mountNode = document.createElement('div');
  document.body.appendChild(mountNode);
  messageInstance.mount(mountNode);
  setTimeout(() => {
    messageInstance.unmount(mountNode);
    document.body.removeChild(mountNode);
  }, timeout);
}
