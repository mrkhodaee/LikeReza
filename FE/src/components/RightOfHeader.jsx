import "../css/RightOfHeader.css";
import TextType from "./TextType";

function RightOfHeader() {
    return(
        <div className="right-of-header">
            <TextType
                as="h1"
                dir="rtl"
                text={[
                    "من یک برنامه‌نویس حرفه‌ای هستم",
                    "تخصص من در توسعه وب است",
                    "کدنویسی تمیز و اصولی می‌نویسم"
                ]}
                typingSpeed={70}
                pauseDuration={2000}
                showCursor
                cursorCharacter="_"
                deletingSpeed={40}
                variableSpeed={{ min: 50, max: 90 }}
                cursorBlinkDuration={0.5}
            />
        </div>
    )
}

export default RightOfHeader