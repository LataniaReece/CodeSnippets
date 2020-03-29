import Highway from '@dogstudio/highway';

export default class CustomTransition extends Highway.Transition {
  // Built-in methods
  in({ from, to, trigger, done }) {
    console.log('IN', from, to)
    done()
  }

  out({ from, trigger, done }) {
    console.log('OUT', from)
    done()
  }
}