import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Form, Checkbox, Header, Button, Dropdown } from 'semantic-ui-react';
import { EQUIPMENT_LIST } from '../constants';
import { WorkoutContext } from '../context.js';

const roundOptions = [
  {
    key: 1,
    text: '1 exercise',
    value: 1
  },
  {
    key: 2,
    text: '2 exercises',
    value: 2
  },
  {
    key: 4,
    text: '4 exercises',
    value: 4
  },
  {
    key: 8,
    text: '8 exercises',
    value: 8
  },
  {
    key: 16,
    text: '16 exercises',
    value: 16
  }
];

const EquipmentForm = () => {
  const workoutContext = useContext(WorkoutContext);
  const {
    equipment,
    addEquip,
    generateWorkouts,
    exercisesAmount,
    setExercisesAmount
  } = workoutContext;

  return (
    <Segment padded color="blue" style={{ width: "80%" }}>
      <Form size="large">
        <Form.Field>
          <Header color="blue" dividing>
            What Equipment Do You Have?
            <Header.Subheader>
              Selecting more than one option will give you different workouts for different equipments.
            </Header.Subheader>
          </Header>
        </Form.Field>
        {EQUIPMENT_LIST.map(item => {
          const name = (str) => {
            if (str === "None") {
              return "Bodyweight";
            }
            else { return str; }
          }
          return (
            <Form.Field key={item.id} style={{ textAlign: "left" }}>
              <Checkbox
                label={name(item.title)}
                value={item.title}
                checked={equipment.includes(item.title)}
                onChange={(e, { value }) => addEquip(value)} />
            </Form.Field>
          )
        })}
        <Form.Field>
          <Header dividing color="blue">
            How Many Rounds?
            <Header.Subheader>
              Specify how many different exercises you would like to perform.
            </Header.Subheader>
          </Header>
        </Form.Field>
        <Form.Field>
          <Dropdown
            fluid
            selection
            options={roundOptions}
            defaultValue={exercisesAmount}
            onChange={(e, { value }) => setExercisesAmount(value)} />
        </Form.Field>
        <Button
          onClick={generateWorkouts}
          as={Link}
          to='/workouts'
          primary
        >
          Find Workouts!
        </Button>
      </Form>
    </Segment>
  );
}

export default EquipmentForm