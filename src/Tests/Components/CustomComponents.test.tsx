import {render, screen} from "@testing-library/react";
import React from "react";
import {Button} from "../../Components/Utils/Button";
import Divider from "../../Components/Utils/Divider";
import {Input} from "../../Components/Utils/Input";
import Tag from "../../Components/Utils/Tag";
import {TextArea} from "../../Components/Utils/TextArea";
import {Typography} from "../../Components/Utils/Typography";
import {Provider} from "react-redux";
import store from "../../Store";
import Tasks from "../../Components/Tasks";

test('Render custom button css', () => {
  render(<Button role={'testButtonId'}>Test</Button>)
  const getButton = screen.getByRole('testButtonId')
  expect(getButton).toHaveStyle({
      background: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none',
      padding: '8px',
      fontSize: '1.2rem',
    }
  )
})

test('Render custom divider css', () => {
  render(<Divider role={'testDividerId'} type={'horizontal'}/>)
  const getDivider = screen.getByRole('testDividerId')
  expect(getDivider).toHaveStyle({
      borderBottom: '1px',
      borderStyle: 'solid',
      color: 'lightslategrey',
      width: '100%',
    }
  )
})

test('Render custom input css', () => {
  render(<Input role={'testInputId'}/>)
  const getInput = screen.getByRole('testInputId')
  expect(getInput).toHaveStyle({
      height: '30px',
      fontSize: '1.1rem',
      alignSelf: 'flex-start',
      borderRadius: '10px',
      borderWidth: '1px',
    }
  )
})

test('Render custom Tag css', () => {
  render(<Tag role={'testTagId'} name={'Test'} color={'#FFF'}/>)
  const getTag = screen.getByRole('testTagId')
  expect(getTag).toHaveStyle({
      borderRadius: '20px',
      backgroundColor: '#FFF',
      paddingRight: '8px',
      paddingLeft: '8px',
    }
  )
})

test('Render custom TextArea css', () => {
  render(<TextArea role={'testTextAreaId'} name={'Test'} color={'#FFF'}/>)
  const getTextArea = screen.getByRole('testTextAreaId')
  expect(getTextArea).toHaveStyle({
      fontSize: '1.1rem',
      alignSelf: 'flex-start',
      width: '100%',
      height: '100px',
      resize: 'none',
      borderRadius: '10px',
    }
  )
})

test('Render custom Typography variant h2 css', () => {
  render(<Typography role={'testTypographyId'} variant={'h2'}>Test</Typography>)
  const getTypography = screen.getByRole('testTypographyId')
  expect(getTypography).toHaveStyle({
      fontSize: ' 2rem',
      fontWeight: 'bold',
      fontFamily: 'cursive',
    }
  )
})

test('Render custom Typography variant h3 css', () => {
  render(<Typography role={'testTypographyId'} variant={'h3'}>Test</Typography>)
  const getTypography = screen.getByRole('testTypographyId')
  expect(getTypography).toHaveStyle({
      fontSize: '1.3rem',
      fontWeight: 'bold',
      fontFamily: 'cursive',
      margin: '8px',
    }
  )
})

test('Render custom Typography variant body2 css', () => {
  render(<Typography role={'testTypographyId'} variant={'body2'}>Test</Typography>)
  const getTypography = screen.getByRole('testTypographyId')
  expect(getTypography).toHaveStyle({
      wordWrap: 'anywhere',
    }
  )
})

test('Render custom Typography variant body css', () => {
  render(<Typography role={'testTypographyId'} variant={'body'}>Test</Typography>)
  const getTypography = screen.getByRole('testTypographyId')
  expect(getTypography).toHaveStyle({
      fontWeight: 'bold',
      fontSize: '1.1rem',
      overflow: 'hidden',
    }
  )
})

test('Render custom Typography without variant css', () => {
  render(<Typography role={'testTypographyId'}>Test</Typography>)
  const getTypography = screen.getByRole('testTypographyId')
  expect(getTypography).toHaveStyle({
      fontSize: '1.1rem',
      overflow: 'hidden',
      margin: '8px',
    }
  )
})

test('Find task title field', () => {
  render(<Provider store={store}><Tasks/></Provider>);
  const getInput = screen.getByPlaceholderText('Task title')
  expect(getInput).toBeInTheDocument();
});
test('Find task description field', () => {
  render(<Provider store={store}><Tasks/></Provider>);
  const getInput = screen.getByPlaceholderText('Task description')
  expect(getInput).toBeInTheDocument();

});

test('Find task date field', () => {
  render(<Provider store={store}><Tasks/></Provider>);
  const getInput = screen.getByPlaceholderText('Task date')
  expect(getInput).toBeInTheDocument();
});