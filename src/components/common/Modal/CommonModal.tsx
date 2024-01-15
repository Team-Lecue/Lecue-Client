import CommonModalForm from './CommonModalForm';
import ModalPortal from './ModalPortal';

interface CommonModal {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
}

function CommonModal({ setModalOn, category }: CommonModal) {
  return (
    <ModalPortal>
      <CommonModalForm onClose={() => setModalOn(false)} category={category} />
    </ModalPortal>
  );
}

export default CommonModal;
