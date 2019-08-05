export default function isPristineProject(puzzle) {
    return !puzzle['updatedAt'];
}