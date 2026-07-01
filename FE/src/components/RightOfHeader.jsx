import "../css/RightOfHeader.css";
import TextType from "./TextType";

function RightOfHeader() {
    return(
        <div className="right-of-header">            
            <h1 style={{ color:'white' }}>محمدرضا خدائی</h1>
            
            <TextType
                as="h2"
                dir="rtl"
                text={[
                    "من یک برنامه‌نویس حرفه‌ای هستم",
                    "تخصص من در توسعه وب است",
                    "کدنویسی تمیز و اصولی می‌نویسم"
                ]}
                typingSpeed={70}
                pauseDuration={2000}
                showCursor
                cursorCharacter="|"
                deletingSpeed={40}
                variableSpeed={{ min: 50, max: 90 }}
                cursorBlinkDuration={0.5}
            />

            <div className="header-buttons">
                <button className="header-btn header-btn-primary">مشاهده پروژه‌ها</button>
                <button className="header-btn header-btn-secondary">تماس با من</button>
            </div>

        </div>
    )
}

export default RightOfHeader