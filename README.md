# Tasks for the test

The assignment will not assess beauty and design. Because there is no design.
The main thing is how the code is written and how it is structured.

Will do the maximum number of tasks in the allotted time.
Use Composition API, TypeScript everywhere and use code as much as possible (DRY approach).
Using SOLID principles will be a big plus.
You need to write the logic yourself without third-party libs and implementations.

## Structure of the repository:
The structure of the repository is close to the real project,
but the elements unnecessary for this task are selected.

/src
  /shared — global elements
  /entities — all entities, types, stories should be located here(Entity)
  /feature — there are components with simple logic(Use Case)
  /widgets — here are self-sufficient blocks with a set of components. for example, the application header (header) or the bottom part of the page (footer)
  /pages — application pages
  /app
    /nuxt-configs — configuration nuxt.config.ts

## Tasks

1) Add a navigation block to the `/index' page, in the upper part. There are 3 links `/auth/login`, `/auth/secret` and `/bug` in the navigation block. Place routing paths in the @/src/shared/config/routeNav.ts constant

2) Add the navigation block from point (1) to the `/bug' page. So that you can easily move between pages.

3) Fix the bug on `/bug' page. The bug appears when you click on the ``Show Name'' button. The name of the specific routing should be displayed.

4) Create `/auth/login` page. There is no navigation block on this page. Here you need to make a form with 3 elements:
– Mail input field.
- Password input field. A minimum of 3 characters and a maximum of 20. The password must have at least one uppercase letter, at least one lowercase letter, at least one number and at least one special character (~!@#$&%-_'")
- button `Login`

The fields must be validated, and the `Login` button is not active if the form is invalid. The field should show what errors occurred after starting to interact with it. If the field is not valid, the border should turn red.

5) Logic of form submission processing from step (4).

After clicking the `Login` button. Make a function that will check the mail (`tester@test.com`) and password (`TesteR@007"`). Then this function will make a request to the server. Lock the verification and the server's responses. The server will return the following responses:
- if the email and password are correct: {success: true}
- if the email or password is incorrect {seccess: false, error: 'login or password incorrect'}

If the field or password is incorrect, show a die with an error from the ``error'' field above the form. The password was removed from the input field, but the mail was left.

After successful authentication, store user data for the duration of the browser session. And redirect on page `/auth/secret`

6) Create page `/auth/secret`.

The page is available only to authorized users. If the user is not authorized, then I will redirect him to the `/index' page.

The page contains the following elements:
- The navigation block is made in point (1)
- Displaying the user's mail in the tag h1
- Editing form

The editing form consists of:
- Input fields with the mail of the authorized user
- Button `Save`.

The form allows you to edit the user's mail and save it.
The principle of validation is the same as in point (4):
- The `Save` button is not active until the form is valid
- The field with mail displays errors as in point (4)

7) Refine the navigation block made in point (1).

- Add display of authorized user's mail. If the user is authorized then display the mail deb was not a navigation block.
- Add a ``Logout'' button. Displayed only if the user is authorized. When clicked, logs out the user. And it doesn't have access to the `/auth/secret` page until it starts again.
