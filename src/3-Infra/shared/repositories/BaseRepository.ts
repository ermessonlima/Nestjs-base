export abstract class BaseRepository {
  excludesFilteredFields(
    fieldsFiltered: string[],
    allFields: string[],
  ): Record<string, boolean> {
    const filteredFields = {};
    allFields.forEach((field) => {
      if (!fieldsFiltered.includes(field)) {
        filteredFields[field] = true;
      }
    });
    return filteredFields;
  }
}
