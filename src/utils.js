import { fakerES_MX as faker } from '@faker-js/faker'

export const generateUser = () => {
    return {
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        country: faker.location.country(),
        favorite_song: faker.music.songName()
    }
}