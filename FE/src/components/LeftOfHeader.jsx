import "../css/LeftOfHeader.css"

function LeftOfHeader() {
    return(
        <div className="left-of-header" >
            <div className="glow-text">خورشید برنامه‌نویسی</div>

  <div className="solar-system">
    <div className="sun"></div>
    <div className="sun2"></div>

     {/* مدار اول  */}
    <div className="orbit orbit1">
      <div className="tech-item item1">💻</div>
    </div>

     {/* مدار دوم  */}
    <div className="orbit orbit2">
      <div className="tech-item item2">⚙️</div>
    </div>

     {/* مدار سوم  */}
    <div className="orbit orbit3">
      <div className="tech-item item3">📜</div>
      <div className="tech-item item4">☁️</div>
    </div>
  </div>
        </div>
    )
    
    
}

export default LeftOfHeader