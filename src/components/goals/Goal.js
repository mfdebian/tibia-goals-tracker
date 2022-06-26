function Goal(props) {
  const { goal, checkCompleted } = props;

  const handleChange = (id) => {
    checkCompleted(id);
  }

  return (
    <div className="goal" key={goal.id}>
      <p>{goal.name}</p>
      <input
        type="checkbox"
        checked={goal.completed}
        onChange={() => {handleChange(goal.id)}}
      />
        {goal.completed}
      <p>{goal.amount}</p>
    </div>
  )
}

export default Goal;
