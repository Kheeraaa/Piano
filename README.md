# Piano
A colorful piano with animations made with Javascript 
This project implements a virtual piano using HTML, CSS, and JavaScript. Users can interact with the piano both by clicking on keys with the mouse and by using keyboard input.

Functionality-
Key Mapping
The white keys of the piano correspond to the keys 'z', 'x', 'c', 'v', 'b', 'n', and 'm' on the keyboard.
The black keys of the piano correspond to the keys 's', 'd', 'f', 'g', 'h', and 'j' on the keyboard.
Playing Notes
When a key is clicked or its corresponding key is pressed on the keyboard, the associated note will be played.
The playNote() function handles playing the audio associated with the pressed key.
The document.addEventListener('keydown', e => {...}) function listens for keydown events and triggers the appropriate note to be played.
Visual Feedback
When a key is pressed, a visual bubble effect is displayed on the screen to provide feedback to the user.
Three different types of bubbles are created:
White bubbles for white keys.
Black bubbles for black keys.
Blue bubbles for all keys.
Each bubble disappears after its animation ends.
Usage
Simply click on the keys of the virtual piano with the mouse or press the corresponding keys on the keyboard to play notes and see the visual effects.

Credits
This project was created by Kheeraaa inspired by various piano projects available.

