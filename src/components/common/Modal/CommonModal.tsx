import CommonModalForm from './CommonModalForm';
import ModalPortal from './ModalPortal';

interface CommonModal {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  uuid?: string;
}

function CommonModal({ setModalOn, category, uuid }: CommonModal) {
  return (
    <ModalPortal>
      <CommonModalForm onClose={() => setModalOn(false)} category={category} uuid={uuid}/>
    </ModalPortal>
  );
}

export default CommonModal;
