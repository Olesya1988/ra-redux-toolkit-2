import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { photoList } from "./photoSlice";

export function Photos() {
  const photos = useAppSelector((state) => state.photos.value);
  const dispatch = useAppDispatch();

  function getFile(e: any) {
    const element = e.target;
    const url: any = URL.createObjectURL(element.files[0]);
    dispatch(photoList(url));
    element.value = "";
  }

  return (
    <>
      <header>
        <span className="title">Выберите фото профиля</span>
        <input type="file" onChange={getFile} />
      </header>
      <div className="photos__container">
        {photos.map((el, index) => {
          return <img className="photo" key={index} src={el}></img>;
        })}
      </div>
    </>
  );
}
