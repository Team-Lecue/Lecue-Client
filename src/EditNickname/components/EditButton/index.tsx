import Button from '../../../components/common/Button';

interface EditButtonProps {
  isActive: boolean;
  onClick: () => void;
}

function EditButton({ isActive, onClick }: EditButtonProps) {
  return (
    <Button variant="complete" disabled={!isActive} onClick={onClick}>
      완료
    </Button>
  );
}

export default EditButton;
