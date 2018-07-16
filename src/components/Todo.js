import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from 'material-ui/Checkbox'
import { ListItem, ListItemText } from 'material-ui/List'

const getStyles = ({ completed }) => {
  return {
    listItemText: {
      marginTop: 0,
      textDecoration: completed ? 'line-through' : 'none'
    }
  }
}

const Todo = ({ onClick, completed, text }) => {
  const styles = getStyles({ completed })
  return (
    <ListItem>
      <Checkbox
        onChange={onClick}
        checked={completed}
      />
      <ListItemText
        primary={text}
        style={styles.listItemText}
      />
    </ListItem>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
