import { deepEqual } from "~/src/entities/deepEqual";
import { IUserData } from "~/src/entities/eventTypes";

const mocUser = {
  email: 'tester@test.com',
  password: 'TesteR@007"'
}

export const checkUser = (user: IUserData) => {
  const isObjectEqual = deepEqual(user, mocUser)
  if (isObjectEqual) {
    return {success: true}
  };

  return {success: false, error: 'login or password incorrect'}
};
