function random(){

    ComfyJS.onChat = ( user, message, flags, self, extra ) => {

        command = id.filter(extra.customRewardId)
        if (flags.customReward){
        document.querySelector("#ZOL").innerText = "Yes";
        }
        else{
        document.querySelector("#ZOL").innerText = "NO";
        }
    }
}