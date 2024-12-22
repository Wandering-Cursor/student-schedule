import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface AuthToken {
            username: string;
            password: string;
            token: string;
        }
        export interface Group {
            url: string; // uri
            uuid: string; // uuid
            created_at: string; // date-time
            updated_at: string; // date-time
            name: string;
            specialty: string; // uri
        }
        export interface GroupSchedule {
            url: string; // uri
            uuid: string; // uuid
            scheduled_pairs: ScheduledPair[];
            group: ShortGroup;
            created_at: string; // date-time
            updated_at: string; // date-time
            for_date: string; // date
        }
        /**
         * * `1` - First
         * * `2` - Second
         * * `3` - Third
         * * `4` - Fourth
         * * `5` - Fifth
         * * `6` - Sixth
         * * `0` - Zeroth
         * * `C` - Consultation
         * * `X` - Custom
         */
        export type NameEnum = "1" | "2" | "3" | "4" | "5" | "6" | "0" | "C" | "X";
        export interface PaginatedGroupList {
            /**
             * example:
             * 123
             */
            count: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results: Group[];
        }
        export interface PaginatedScheduleList {
            /**
             * example:
             * 123
             */
            count: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results: Schedule[];
        }
        export interface PaginatedSpecialtyList {
            /**
             * example:
             * 123
             */
            count: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results: Specialty[];
        }
        export interface PaginatedTeacherList {
            /**
             * example:
             * 123
             */
            count: number;
            /**
             * example:
             * http://api.example.org/accounts/?page=4
             */
            next?: string | null; // uri
            /**
             * example:
             * http://api.example.org/accounts/?page=2
             */
            previous?: string | null; // uri
            results: Teacher[];
        }
        export interface Pair {
            /**
             * * `1` - First
             * * `2` - Second
             * * `3` - Third
             * * `4` - Fourth
             * * `5` - Fifth
             * * `6` - Sixth
             * * `0` - Zeroth
             * * `C` - Consultation
             * * `X` - Custom
             */
            name: "1" | "2" | "3" | "4" | "5" | "6" | "0" | "C" | "X";
            start_time: string | null; // time
            end_time: string | null; // time
        }
        export interface PhotoSchedule {
            url: string; // uri
            uuid: string; // uuid
            photos: PhotoSchedulePhoto[];
            created_at: string; // date-time
            updated_at: string; // date-time
            name?: string;
        }
        export interface PhotoSchedulePhoto {
            /**
             * ID
             */
            uuid: string; // uuid
            created_at: string; // date-time
            updated_at: string; // date-time
            file: string; // uri
        }
        export interface Schedule {
            url: string; // uri
            uuid: string; // uuid
            group_schedules: ShortGroupScheduleInfo[];
            created_at: string; // date-time
            updated_at: string; // date-time
            for_date?: string; // date
            /**
             * Photo Schedule
             */
            photo_schedules?: string | null; // uri
        }
        export interface ScheduledPair {
            /**
             * ID
             */
            uuid: string; // uuid
            pair: Pair;
            teacher: ShortTeacher;
            created_at: string; // date-time
            updated_at: string; // date-time
            name: string;
            room: string;
        }
        export interface ShortGroup {
            /**
             * ID
             */
            uuid: string; // uuid
            url: string; // uri
            name: string;
        }
        export interface ShortGroupScheduleInfo {
            uuid: string; // uuid
            url: string; // uri
            group: ShortGroup;
        }
        export interface ShortTeacher {
            uuid: string; // uuid
            url: string; // uri
            name: string;
            short_name: string;
        }
        export interface Specialty {
            url: string; // uri
            uuid: string; // uuid
            groups: string /* uri */[];
            created_at: string; // date-time
            updated_at: string; // date-time
            name: string;
            full_name: string;
        }
        export interface Teacher {
            url: string; // uri
            uuid: string; // uuid
            created_at: string; // date-time
            updated_at: string; // date-time
            first_name: string;
            last_name: string;
            middle_name: string | null;
        }
    }
}
declare namespace Paths {
    namespace AuthLoginCreate {
        export type RequestBody = Components.Schemas.AuthToken;
        namespace Responses {
            export type $200 = Components.Schemas.AuthToken;
        }
    }
    namespace AuthLogoutCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AuthLogoutallCreate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace GroupScheduleRetrieve {
        namespace Parameters {
            /**
             * ID
             */
            export type Uuid = string; // uuid
        }
        export interface PathParameters {
            uuid: /* ID */ Parameters.Uuid /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.GroupSchedule;
        }
    }
    namespace OrgGroupList {
        namespace Parameters {
            export type Name = string;
            export type Page = number;
            export type Specialty = string; // uuid
        }
        export interface QueryParameters {
            name?: Parameters.Name;
            page?: Parameters.Page;
            specialty?: Parameters.Specialty /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedGroupList;
        }
    }
    namespace OrgGroupRetrieve {
        namespace Parameters {
            /**
             * ID
             */
            export type Uuid = string; // uuid
        }
        export interface PathParameters {
            uuid: /* ID */ Parameters.Uuid /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Group;
        }
    }
    namespace OrgSpecialtyList {
        namespace Parameters {
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedSpecialtyList;
        }
    }
    namespace OrgSpecialtyRetrieve {
        namespace Parameters {
            /**
             * ID
             */
            export type Uuid = string; // uuid
        }
        export interface PathParameters {
            uuid: /* ID */ Parameters.Uuid /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Specialty;
        }
    }
    namespace OrgTeacherList {
        namespace Parameters {
            export type FirstName = string;
            export type LastName = string;
            export type MiddleName = string;
            export type Page = number;
        }
        export interface QueryParameters {
            first_name?: Parameters.FirstName;
            last_name?: Parameters.LastName;
            middle_name?: Parameters.MiddleName;
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedTeacherList;
        }
    }
    namespace OrgTeacherRetrieve {
        namespace Parameters {
            /**
             * ID
             */
            export type Uuid = string; // uuid
        }
        export interface PathParameters {
            uuid: /* ID */ Parameters.Uuid /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Teacher;
        }
    }
    namespace PhotoScheduleRetrieve {
        namespace Parameters {
            /**
             * ID
             */
            export type Uuid = string; // uuid
        }
        export interface PathParameters {
            uuid: /* ID */ Parameters.Uuid /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PhotoSchedule;
        }
    }
    namespace ScheduleList {
        namespace Parameters {
            export type DateGte = string; // date
            export type DateLte = string; // date
            export type ForDate = string; // date
            export type Page = number;
        }
        export interface QueryParameters {
            date__gte?: Parameters.DateGte /* date */;
            date__lte?: Parameters.DateLte /* date */;
            for_date?: Parameters.ForDate /* date */;
            page?: Parameters.Page;
        }
        namespace Responses {
            export type $200 = Components.Schemas.PaginatedScheduleList;
        }
    }
    namespace ScheduleRetrieve {
        namespace Parameters {
            /**
             * ID
             */
            export type Uuid = string; // uuid
        }
        export interface PathParameters {
            uuid: /* ID */ Parameters.Uuid /* uuid */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.Schedule;
        }
    }
}

export interface OperationMethods {
  /**
   * auth_login_create
   */
  'auth_login_create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AuthLoginCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AuthLoginCreate.Responses.$200>
  /**
   * auth_logout_create
   */
  'auth_logout_create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AuthLogoutCreate.Responses.$200>
  /**
   * auth_logoutall_create - Log the user out of all sessions
   * I.E. deletes all auth tokens for the user
   */
  'auth_logoutall_create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AuthLogoutallCreate.Responses.$200>
  /**
   * group_schedule_retrieve - Allows to view Schedules of the organization
   */
  'group_schedule_retrieve'(
    parameters: Parameters<Paths.GroupScheduleRetrieve.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GroupScheduleRetrieve.Responses.$200>
  /**
   * org_group_list - Allows to view Groups of some Specialty
   */
  'org_group_list'(
    parameters?: Parameters<Paths.OrgGroupList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OrgGroupList.Responses.$200>
  /**
   * org_group_retrieve - Allows to view Groups of some Specialty
   */
  'org_group_retrieve'(
    parameters: Parameters<Paths.OrgGroupRetrieve.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OrgGroupRetrieve.Responses.$200>
  /**
   * org_specialty_list - Allows to view Specialties of the organization
   */
  'org_specialty_list'(
    parameters?: Parameters<Paths.OrgSpecialtyList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OrgSpecialtyList.Responses.$200>
  /**
   * org_specialty_retrieve - Allows to view Specialties of the organization
   */
  'org_specialty_retrieve'(
    parameters: Parameters<Paths.OrgSpecialtyRetrieve.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OrgSpecialtyRetrieve.Responses.$200>
  /**
   * org_teacher_list - Allows to view Teachers
   */
  'org_teacher_list'(
    parameters?: Parameters<Paths.OrgTeacherList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OrgTeacherList.Responses.$200>
  /**
   * org_teacher_retrieve - Allows to view Teachers
   */
  'org_teacher_retrieve'(
    parameters: Parameters<Paths.OrgTeacherRetrieve.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OrgTeacherRetrieve.Responses.$200>
  /**
   * photo_schedule_retrieve - Allows to view Schedules of the organization
   */
  'photo_schedule_retrieve'(
    parameters: Parameters<Paths.PhotoScheduleRetrieve.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PhotoScheduleRetrieve.Responses.$200>
  /**
   * schedule_list - Allows to view Schedules of the organization
   */
  'schedule_list'(
    parameters?: Parameters<Paths.ScheduleList.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ScheduleList.Responses.$200>
  /**
   * schedule_retrieve - Allows to view Schedules of the organization
   */
  'schedule_retrieve'(
    parameters: Parameters<Paths.ScheduleRetrieve.PathParameters>,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ScheduleRetrieve.Responses.$200>
}

export interface PathsDictionary {
  ['/api/auth/login/']: {
    /**
     * auth_login_create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AuthLoginCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AuthLoginCreate.Responses.$200>
  }
  ['/api/auth/logout/']: {
    /**
     * auth_logout_create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AuthLogoutCreate.Responses.$200>
  }
  ['/api/auth/logoutall/']: {
    /**
     * auth_logoutall_create - Log the user out of all sessions
     * I.E. deletes all auth tokens for the user
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AuthLogoutallCreate.Responses.$200>
  }
  ['/api/group_schedule/{uuid}/']: {
    /**
     * group_schedule_retrieve - Allows to view Schedules of the organization
     */
    'get'(
      parameters: Parameters<Paths.GroupScheduleRetrieve.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GroupScheduleRetrieve.Responses.$200>
  }
  ['/api/org/group/']: {
    /**
     * org_group_list - Allows to view Groups of some Specialty
     */
    'get'(
      parameters?: Parameters<Paths.OrgGroupList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OrgGroupList.Responses.$200>
  }
  ['/api/org/group/{uuid}/']: {
    /**
     * org_group_retrieve - Allows to view Groups of some Specialty
     */
    'get'(
      parameters: Parameters<Paths.OrgGroupRetrieve.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OrgGroupRetrieve.Responses.$200>
  }
  ['/api/org/specialty/']: {
    /**
     * org_specialty_list - Allows to view Specialties of the organization
     */
    'get'(
      parameters?: Parameters<Paths.OrgSpecialtyList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OrgSpecialtyList.Responses.$200>
  }
  ['/api/org/specialty/{uuid}/']: {
    /**
     * org_specialty_retrieve - Allows to view Specialties of the organization
     */
    'get'(
      parameters: Parameters<Paths.OrgSpecialtyRetrieve.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OrgSpecialtyRetrieve.Responses.$200>
  }
  ['/api/org/teacher/']: {
    /**
     * org_teacher_list - Allows to view Teachers
     */
    'get'(
      parameters?: Parameters<Paths.OrgTeacherList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OrgTeacherList.Responses.$200>
  }
  ['/api/org/teacher/{uuid}/']: {
    /**
     * org_teacher_retrieve - Allows to view Teachers
     */
    'get'(
      parameters: Parameters<Paths.OrgTeacherRetrieve.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OrgTeacherRetrieve.Responses.$200>
  }
  ['/api/photo_schedule/{uuid}/']: {
    /**
     * photo_schedule_retrieve - Allows to view Schedules of the organization
     */
    'get'(
      parameters: Parameters<Paths.PhotoScheduleRetrieve.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PhotoScheduleRetrieve.Responses.$200>
  }
  ['/api/schedule/']: {
    /**
     * schedule_list - Allows to view Schedules of the organization
     */
    'get'(
      parameters?: Parameters<Paths.ScheduleList.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ScheduleList.Responses.$200>
  }
  ['/api/schedule/{uuid}/']: {
    /**
     * schedule_retrieve - Allows to view Schedules of the organization
     */
    'get'(
      parameters: Parameters<Paths.ScheduleRetrieve.PathParameters>,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ScheduleRetrieve.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
