import { memo } from "react"


 function CallbackFunction() {
    document.title='UseCallBack'
    alert('CallBack')
}
export default memo(CallbackFunction)