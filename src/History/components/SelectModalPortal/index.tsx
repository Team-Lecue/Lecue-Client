import ReactDOM from 'react-dom';

interface SelectModalPortalProps {
  children: React.ReactNode;
}

function SelectModalPortal({ children }: SelectModalPortalProps) {
  const el: HTMLElement | null = document.getElementById('historyselect-modal');
  return ReactDOM.createPortal(children, el as Element | DocumentFragment);
}

export default SelectModalPortal;
