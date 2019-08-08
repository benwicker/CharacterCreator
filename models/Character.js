export class Character {
    constructor () {
        this.version = null;

        this.name = null;
        this.classId = null;
        this.level = null;
        this.alignment = null;
        this.speciesId = null;
        this.backgroundId = null;
        this.xp = null;
        this.xpNextLevel = null;
        this.playerName = null;

        this.proficiencyBonus = null;
        this.initiativeBonus = null;
        this.armorClass = null;
        this.hpMax = null;
        this.hpDiceMax = null;
        this.proficiencies = [];
        this.passiveWidsom = null;
        this.languages = [];

        this.abilities = {
            strength: null,
            dexterity: null,
            constitution: null,
            intelligence: null,
            wisdom: null,
            charisma: null
        };

        this.age = null;
        this.gender = null;
        this.height = null;
        this.weight = null;
        this.size = null;
        this.hair = null;
        this.eyes = null;
        this.skin = null;
        this.appearance = null;
        this.personalityTraits = null;
        this.ideals = null;
        this.bonds = null;
        this.flaws = null;
        this.backgroundFeature = null;
    }
}