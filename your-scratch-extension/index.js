const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'yourScratchExtension',

            // name that will be displayed in the Scratch UI
            name: 'Pacman en zo',

            // colours to use for your extension blocks
            color1: '#FF8C1A',
            color2: '#DB6E00',

            // // icons to display
            // blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            menuIconURI: 'data:image/png;base64,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',

            // your Scratch blocks
            blocks: [
                {
                    opcode: 'loop',
                    blockType: BlockType.LOOP,
                    text: 'herhaal tot [IETS]',
                    terminal: true,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {
                        IETS: {
                            type: ArgumentType.CONDITION
                        },
                    }
                },
                {
                    opcode: 'loop2',
                    blockType: BlockType.LOOP,
                    text: 'zolang pad naar voren',
                    terminal: true,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],
                    arguments: {}
                },
                {
                    opcode: 'spookje',
                    blockType: BlockType.BOOLEAN,
                    text: '[PLAATJE]',
                    arguments: {
                        PLAATJE: {
                            type: ArgumentType.IMAGE,
                            dataURI: 'data:image/png;base64,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',
                            alt: 'Dit is een rood spookje',
                            flipRTL: true
                        }
                    }
                },
                {
                    opcode: 'aardbeien',
                    blockType: BlockType.BOOLEAN,
                    text: 'er aardbeien zijn',
                    arguments: {}
                },
                {
                    opcode: 'vraagtekens',
                    blockType: BlockType.BOOLEAN,
                    text: '??????????',
                    arguments: {}
                },
                {
                    opcode: 'als_dan',
                    blockType: BlockType.CONDITIONAL,
                    branchCount: 1,
                    text: 'als pad [RICHTING]',
                    terminal: true,
                    arguments: {
                        RICHTING: {
                            type: ArgumentType.STRING,
                            menu: 'richtings_menu'
                        }
                    }
                },
                {
                    opcode: 'als_dan_anders',
                    blockType: BlockType.CONDITIONAL,
                    branchCount: 2,
                    text: ['als pad [RICHTING]', 'anders'],
                    terminal: true,
                    arguments: {
                        RICHTING: {
                            type: ArgumentType.STRING,
                            menu: 'richtings_menu'
                        }
                    }
                },
                {
                    opcode: 'draai',
                    blockType: BlockType.COMMAND,
                    text: 'draai [RICHTING]',
                    arguments: {
                        RICHTING : {
                            type: ArgumentType.STRING,
                            menu: 'richtings_menu'
                        }
                    }
                },
                {
                    opcode: 'beweeg_naar_voren',
                    blockType: BlockType.COMMAND,
                    text: 'beweeg naar voren'
                }
            ],
            menus: {
                richtings_menu: {
                    items: ['naar links', 'naar rechts', 'naar voren', 'naar achteren']
                }
            }
        };
    }

    loop2() {
    }

    spookje () {
        return true;
    }

    aardbeien() {
        return true;
    }

    vraagtekens() {
        return true;
    }

    als_dan({RICHTING}) {
        return true;
    }

    als_dan_anders({RICHTING}) {
        return true;
    }

    draai({RICHTING}) {
    }

    beweeg_naar_voren() {
    }
    
}

module.exports = Scratch3YourExtension;
