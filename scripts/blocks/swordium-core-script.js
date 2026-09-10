//script that allows swordium cores to be mobile

//swordium core script

const swordiumCore = extend(CoreBlock, "swordium-core", {
canPlaceOn(tile, team, rotation){
        return true;
    },
    canReplace(other){
        if(other instanceof CoreBlock) return true;
        return this.super$canReplace(other);
    },
    canBreak(tile, team){
    	return true;
    },
})

//swordium mini core script

const swordiumMiniCore = extend(CoreBlock, "swordium-mini-core", {
canPlaceOn(tile, team, rotation){
        return true;
    },
    canReplace(other){
        if(other instanceof CoreBlock) return true;
        return this.super$canReplace(other);
    },
    canBreak(tile, team){
    	return true;
    },
})
