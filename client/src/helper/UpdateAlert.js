import Swal from "sweetalert2";
import {UpdateStatusRequest} from "../APIRequest/APIRequest";
import {ErrorToast} from "../helper/FormHelper";

export function UpdateToDO(id,status){
    return Swal.fire({
        title: 'Change Status',
        input: 'select',
        inputOptions: {New: 'New', Completed: 'Completed', Progress: 'Progress', Canceled: 'Canceled'},
        inputValue:status,
    }).then((result)=>{
        if(result.value === undefined){
            ErrorToast("Please select a Status")
        }else{
            return UpdateStatusRequest(id, result.value).then((res)=>{
                return res;
            })
        }
        
    })
}