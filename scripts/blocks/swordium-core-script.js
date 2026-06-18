//name of object, type of your content, file-name
const miniCore = extend(CoreBlock, "swordium-core", {
//is it possible to build a core regardless of another core, true or false.
canPlaceOn(tile, team, rotation){
        return true;
    },
//can this core replace another one
    canReplace(other){
        if(other instanceof CoreBlock) return true;
        return this.super$canReplace(other);
    },
//is it possible to break the core
    canBreak(tile, team){
    	return true;
    },
})
