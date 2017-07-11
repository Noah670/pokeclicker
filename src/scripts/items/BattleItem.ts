///<reference path="Item.ts"/>
class BattleItem extends Item {

    type: GameConstants.BattleItemType;

    constructor(type: GameConstants.BattleItemType) {
        let basePrice = 0;
        let priceMultiplier = 1;
        super(name, basePrice, priceMultiplier, GameConstants.Currency.money);
        this.type = type;
    }

    buy() {
    }

    use() {
    }
}

