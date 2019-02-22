window.onload = function () {
    $('#quiz').quiz({
        homeButton: '#custom-home',
        counterFormat: 'Question %current of 5',
        resultsFormat: 'You answer right for %score question(s) from %total.',
        nextButtonText: 'Next',
        finishButtonText: 'Finish',
        restartButtonText: 'Restart',
        questions: [
            {
                'q': 'What’s the moon thought to be made of?',
                'options': [
                    'Iron and rock, with magnesium, silicon, oxygen and more',
                    'Cheese'
                ],
                'correctIndex': 0,
                'correctResponse': 'Correct. Actually moon is made of Silicon dioxide (SiO2) 45.4%, Aluminium oxide (Al2O3) 14.9%, Calcium oxide (CaO) 11.8%, magnesia (MgO) 9.2% and others.',
                'incorrectResponse': 'Incorrect. Mouses are disappointed with your answer.'
            },
            {
                'q': 'How far is it from Earth to the Moon, roughly?',
                'options': [
                    '23,885 miles (38,439.18144 km)',
                    '238,855 miles (384,399.86 km)',
                    '2,388,550 miles (3,843,998.6112 km)'
                ],
                'correctIndex': 1,
                'correctResponse': 'Correct. On average, the distance from Earth to the moon is about 238,855 miles (384,399 km).',
                'incorrectResponse': 'Incorrect. Well, the moon is not always the same distance away from Earth. But your answer is totally incorrect.'
            },
            {
                'q': 'Which if this was collected by APOLLO astronauts on the moon?',
                'options': [
                    'Lunar surface material',
                    'The Soviet flag'
                ],
                'correctIndex': 0,
                'correctResponse': 'Correct. With some difficulty the astronauts lifted film and two sample boxes containing 47.5 lb (21.55 kilograms) of lunar surface material to the LM hatch using a flat cable pulley device called the Lunar Equipment Conveyor (LEC).',
                'incorrectResponse': 'Incorrect. Apollo 11 was the spaceflight that landed the first two people on the Moon. So there could never be any kind of flags.'
            },
            {
                'q': 'Why is the moon pockmarked with craters?',
                'options': [
                    'Cheese comes that way.',
                    'Unlike the Earth, the Moon has no atmosphere to protect itself from impacting bodies.'
                ],
                'correctIndex': 1,
                'correctResponse': 'Correct. Moon also has very little geologic activity (like volcanoes) or weathering (from wind or rain) so craters remain intact from billions of years. The Earth is also covered in water and vegetation which easily disguises impact craters.',
                'incorrectResponse': 'Incorrect. Mouses are laughing on you!'
            },
            {
                'q': 'What about gravity on the moon?',
                'options': [
                    'It looks the same like on the Earth.',
                    'It is weaker than Earth\'s gravity for more then 1000 times.'
                ],
                'correctIndex': 0,
                'correctResponse': 'Correct. The Gravity of the Moon Compared to Earth. The gravity on the Moon is about 17% what it is on the Earth.',
                'incorrectResponse': 'Incorrect. In that case astronauts would never be able to walk on the moon.'
            }
        ]


    });
}