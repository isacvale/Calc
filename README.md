# Calculator

This app implements a simple calculator. This is an exercise in design and development, using React, Redux and CSS in JS.

## Features

The app contains three pages:

### Calculator (home page)

Composed of a thin strip (aprox. 280px) with variable height. It is composed of different section.

#### Keys (tabbable)

The numbers and opperations dispatches write commands to the store. The **clear** key dispatches a delete all command, and the **back** key dispatches a delete command for the last digit. The **save** key register dispatches a save command with the current expression, so it can appear in the Scope and in the History pages.

The Keys group is accessible by tabbing. In fact, they are divided into two distinct tabbable groups, one containing 0-9, period and basic arythmetic operations, and another containing the other keys. The ARROWS can be used to select a specific key, including moveing from one group to the other (and even to other components, as scope and navigation). Once a key is focused, it can be activated by the SPACEBAR or ENTER keys. The ESC key activates the clear key.

#### Visor (non-tabbable)

It displays the current expression, fed from the store, and the calculated sum. Calculations are made in real time. It should clearly display (through colors and visually) when the expression is malformed.

The visor is not interactive and non tabbable. Clicking over it **does not allow** the user to set a cursor position for editing the expression. That would create a complexity that is not in the main focus of this project.

When tabbed to the number group, 5 is selected by default. When tabbing to the secondary group, save is selected by default.

#### Scope (tabbable)

This is a scrollable list of precomputated values and operations. It holds 26 values, each associated with a letter, so typing A-Z will recall the value inside the current expression.

The items in scope are fed from the store (configurable in the History page). Each expression saved in the current session automatically shows in scope. Each item displays its shortcut letter, the expression (or its label) and the computed result.

The Scope is the stretchable part of the calculator, adapting to the window's height.

#### Navigation

Contains three links, one for the calculator (main) page, one for dev, and one for history. It also indicates the current active page.

### Dev (page)

Includes a small description of the projects, technologies, and people involved.

### History (page)

This pages allows the user to select what preselected values appear in the scope of the calculator.

It is a list of item containing:
- a checkbox selector;
- an input with the original expression, which can be edited to give it a label instead of the expression;
- the resulting value;
- a delete button to remove the value from History.

History should persist in accross sections in the browser memory.

Some initial values, such as pi, are available and not selected by default. Their labels can't be changed and they cannot be deleted.

## Dev Guidelines

- Testing should only cover the interfaces of components, not its implementations. Too many tests is worse than none at all.
- Folders representing components should be capitalized, with a index.js default-exporting the component.
- Folders with a collection of components should not be capitalized. The should have an index.js exporting all components in the folder.
- Use react-proptypes to check types of arguments used inside the component. It's ok to let props go through without defining types (cacthing them in a `...rest` param and passing them down to children.)
