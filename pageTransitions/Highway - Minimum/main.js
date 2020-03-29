import Highway from '@dogstudio/highway';
import CustomTransition from "transition"

const H = new Highway.Core({
    transitions: {
      name: CustomTransition
    }
});