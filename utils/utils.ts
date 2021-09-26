export const parseName = (name: string): string => {
    if (!name || name.length === 0) return name;
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}