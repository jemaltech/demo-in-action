import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BootcampSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BootcampSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BootcampSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BootcampSharedModule {
  static forRoot() {
    return {
      ngModule: BootcampSharedModule
    };
  }
}
