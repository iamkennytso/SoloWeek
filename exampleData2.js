{
    "abilities": [
        {
            "slot": 3,
            "ability": {
                "url": "https://pokeapi.co/api/v2/ability/34/",
                "name": "chlorophyll"
            }
        },
        {
            "slot": 1,
            "ability": {
                "url": "https://pokeapi.co/api/v2/ability/65/",
                "name": "overgrow"
            }
        }

        //https://pokeapi.co/api/v2/ability/34/
        {
            "name": "chlorophyll",
            },
            "effect_entries": [
                {
                    "short_effect": "Doubles Speed during strong sunlight.",
                    "effect": "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
                    "language": {
                        "url": "https://pokeapi.co/api/v2/language/9/",
                        "name": "en"
                    }
                }
            ],
        }
    ],
    //graph these
    "stats": [
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/6/",
                "name": "speed"
            },
            "base_stat": 45
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/5/",
                "name": "special-defense"
            },
            "base_stat": 65
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/4/",
                "name": "special-attack"
            },
            "base_stat": 65
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/3/",
                "name": "defense"
            },
            "base_stat": 49
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/2/",
                "name": "attack"
            },
            "base_stat": 49
        },
        {
            "stat": {
                "url": "https://pokeapi.co/api/v2/stat/1/",
                "name": "hp"
            },
            "base_stat": 45
        }
    ],
    "name": "bulbasaur",
    //divide by 10, equals kg, convert to lb
    "weight": 69,
    "sprites": {
        "front_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
   },
    //divide by 10, equals meters
    "height": 7,
    "species": {
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    "id": 1,
    "types": [
        {
            "type": {
                "name": "poison"
            }
        },
        {
            "type": {
                "name": "grass"
            }
        }
    ]
}
//https://pokeapi.co/api/v2/pokemon-species/1
{
    //outta 225. Higher is easier
    "flavor_text_entries": [
        {
            "version": {
                "name": "alpha-sapphire"
            },
            "flavor_text": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
            "language": {
                "name": "en"
            }
        }
    ],
    "name": "bulbasaur",
    "evolution_chain": {
        "url": "https://pokeapi.co/api/v2/evolution-chain/1/"
    },
    //The chance of this Pokémon being female, in eighths; or -1 for genderless
    "gender_rate": 1,
}