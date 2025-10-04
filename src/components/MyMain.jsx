import languagesComp from "./LanguagesComp";
import { useState } from "react";
import MyBtn from "./Btn/MyBtn";
import DetailsBtn from "./Btn/DetailBtn";

export default function MyMain() {
    const [btnActive, setBtnActive] = useState(null);

    return (
        <div className="d-flex flex-column align-items-start ms-3 mt-5">

            <div className="d-flex gap-2 mb-3">
                {languagesComp.map((lang) => (
                    <MyBtn

                        key={lang.id}
                        title={lang.title}
                        isSelected={btnActive === lang.id}
                        onToggle={() =>
                            setBtnActive(btnActive === lang.id ? null : lang.id)
                        }

                    />
                ))}
            </div>

            <div className="mt-3">
                {btnActive === null ? (
                    <p>Nessun argomento selezionato</p>
                ) : <DetailsBtn
                    info={languagesComp[btnActive - 1].description}
                    isSelected={true}
                />
                }
            </div>
        </div>
    );

}