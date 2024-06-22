import React from 'react';
import { Permitted } from 'foremanReact/common/hooks/Permissions/usePermission';
import { AnsibleRolesImportButton } from './AnsibleRolesImportButton';
import { IMPORT_ANSIBLE_ROLES } from '../../../permissions';

export const AnsibleRolesImportButtonWrapper = () => (
  <Permitted requiredPermission={IMPORT_ANSIBLE_ROLES}>
    <AnsibleRolesImportButton />
  </Permitted>
);
