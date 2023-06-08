import React, { useState } from 'react';
import { Section } from '../components/SectionTitle/SectionTitle';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '../components/Statistics/Statistics';
import { Notification } from '../components/NotificationMessage/NotificationMessage';

const options = [
  { id: 'good', title: 'good' },
  { id: 'neutral', title: 'neutral' },
  { id: 'bad', title: 'bad' },
];
let total = 0;

export const App = () => {
  // const [total, setTotal] = useState(0);
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  
  const { good, neutral, bad } = feedback;

  let positivePercentage = good / total * 100;

  const handleClick = evt => {
    const { name } = evt.target;

    setFeedback(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));

    countTotalFeedback();
  };

  const countTotalFeedback = () => {
    total += 1;
    // setTotal(prevState => prevState + 1);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>

      <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage.toFixed()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </>
  );
};



// let total = 0;
// let positivePercentage = 0;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClickGood = evt => {
//     const { name } = evt.target;

//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));

//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage(evt);
//   };

//   countTotalFeedback = () => {
//     total += 1;
//     // this.setState({ total: this.state.total + 1 });
//   };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => {
  //     return (positivePercentage = (prevState.good / total) * 100);
  //   });
  // };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const keys = Object.keys(this.state)

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={keys}
//             onLeaveFeedback={this.handleClickGood}
//           />
//         </Section>

        // <Section title={'Statistics'}>
        //   {total > 0 ? (
        //     <Statistics
        //       good={good}
        //       neutral={neutral}
        //       bad={bad}
        //       total={total}
        //       positivePercentage={positivePercentage.toFixed()}
        //     />
        //   ) : (
        //     <Notification message="There is no feedback" />
        //   )}
        // </Section>
//       </>
//     );
//   }
// }
