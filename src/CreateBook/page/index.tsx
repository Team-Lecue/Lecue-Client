function CreateBook() {
  const [isActive, setIsActive] = useState([false, false]);
  const handleSetActive = (num: number, t: boolean) => {
    const updatedArray = [...isActive];
    updatedArray[num] = t;
    setIsActive(updatedArray);
  };

  return (
    <S.Wrapper>
      <Header headerTitle="레큐북 만들기" />
        <BookInput
          handleSetActive={(num, t) => handleSetActive(num, t)}
          isTitle
        />
        <BookInput handleSetActive={(num, t) => handleSetActive(num, t)} />
    </S.Wrapper>
  );
}

export default CreateBook;
