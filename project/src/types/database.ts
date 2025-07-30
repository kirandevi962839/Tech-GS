export interface ConsultantRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  message?: string;
  created_at: string;
  updated_at: string;
}

export interface ConsultantRequestInsert {
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  message?: string;
}

export interface Database {
  public: {
    Tables: {
      consultant_requests: {
        Row: ConsultantRequest;
        Insert: ConsultantRequestInsert;
        Update: Partial<ConsultantRequestInsert>;
      };
    };
  };
}