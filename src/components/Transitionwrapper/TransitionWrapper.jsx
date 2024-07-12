import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Transitionwrapper.css';

const TransitionWrapper = ({ children, location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={300}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  </TransitionGroup>
);

export default TransitionWrapper;
