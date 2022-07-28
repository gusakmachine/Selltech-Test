export default function formatFirstError(errors: string[] | undefined, name: string | undefined, label: string): string | null {
    if (!errors)
        return null;
    if (errors.length == 0)
        return null;
    if (!name)
        return null;

    return errors[0].replace(`'${name}'`, label);
}