import classes from './AnswersList.module.css'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) =>{
    return(
      <ul className={classes.AnswerList}>
        {props.answers.map((answer, index) => {
          return(
            <AnswerItem
              key={index}
              answer={answer}
              onAnswerClick={props.onAnswerClick}
              state={props.state ? props.state[answer.id] : null}
            />
          )
        })}
      </ul>
    )
}
export default AnswersList