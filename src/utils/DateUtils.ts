/**
 * Calculates the age in years based on the provided birthdate.
 *
 * @param {Date | string} birthDate - The person's birthdate, as a Date object or an ISO date string (e.g., "1990-05-04").
 * @returns {number} The age in full years.
 */
export function calculateAge(birthDate: Date | string): number {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const birthMonth = birth.getMonth();
    const birthDay = birth.getDate();

    // Subtract 1 if the birthday hasn't occurred yet this year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    return age;
}
