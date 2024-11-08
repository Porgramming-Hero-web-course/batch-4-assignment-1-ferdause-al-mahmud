{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    type ProfilePartial = Partial<Profile>

    const updateProfile = (obj: Profile, updates: ProfilePartial): Profile => {
        return { ...obj, ...updates };
    };

    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

    // console.log(updateProfile(myProfile, { age: 26 }));


}