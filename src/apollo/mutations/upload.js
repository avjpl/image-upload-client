import gql from 'graphql-tag';

export const UPLOAD_FILE = gql`
  mutation uploadFile($files: [Upload!]) {
    uploadFile(files: $files) {
      filename
    }
  }
`;
