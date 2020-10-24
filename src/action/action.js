const saveAction =(reload)=>{
    return {
        type:"save",
        reload,
    }
}

module.exports = {saveAction};