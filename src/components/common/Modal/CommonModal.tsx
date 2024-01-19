import CommonModalForm from './CommonModalForm';
import ModalPortal from './ModalPortal';

interface CommonModal {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  handleFn: () => void;
}

function CommonModal({ setModalOn, category, handleFn }: CommonModal) {
  return (
    <ModalPortal>
      <CommonModalForm
        onClose={() => setModalOn(false)}
        category={category}
        handleFn={handleFn}
      />
    </ModalPortal>
  );
}

export default CommonModal;
