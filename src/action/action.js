const saveAction =(value)=>{
    return {
        type:"SAVE",
        value,
        reload:true
    }
}

const addContactAction = (contact) =>{
    return{
        type: "ADD",
        contact,
    }
}

module.exports = {saveAction,addContactAction};