-- ============================================================
-- Test Data + must_change_password column
-- Run this AFTER SUPABASE_SETUP.sql
-- ============================================================

-- 1. Add must_change_password column
ALTER TABLE clients ADD COLUMN IF NOT EXISTS must_change_password boolean DEFAULT true;

-- 2. Insert 4 test clients (password for all: Portal2025!)
-- Using separate hashes for each

INSERT INTO clients (client_ref, full_name, email, phone, visa_type, case_status, adviser_name, notes, password_hash, must_change_password)
VALUES
  (
    'BVI-2026-00001',
    'Priya Sharma',
    'priya.sharma@example.com',
    '+44 7911 123456',
    'Skilled Worker',
    'Active',
    'James Mitchell',
    'Client working as a nurse at NHS Trust. COS already issued. Awaiting TB certificate from approved clinic.',
    '$2b$12$d8SeQQC/5NUu8SFMcIUF5eOzOwc/Q1O2qRTSX5fIsR5/q1NO6FDW6',
    true
  ),
  (
    'BVI-2026-00002',
    'Mohammed Al-Rashid',
    'mohammed.alrashid@example.com',
    '+44 7922 234567',
    'Spouse / Family',
    'In Preparation',
    'Sarah Chen',
    'Sponsor is British citizen. Marriage certificate needs to be apostilled. Client currently in UAE.',
    '$2b$12$Vm0nlBYSqyyIO6XM/X66NusCLZcMVSoUnrCjkDpFAy7JdG3PYSdne',
    true
  ),
  (
    'BVI-2026-00003',
    'Yuki Tanaka',
    'yuki.tanaka@example.com',
    '+44 7933 345678',
    'Student',
    'Submitted',
    'James Mitchell',
    'CAS from University of Manchester. Maintenance funds confirmed. Application submitted 15 April.',
    '$2b$12$hB8R06BLbHa4SE185U9UBeTodnEVK.K2fLNUvMZo29e/0S5yBl9w2',
    false
  ),
  (
    'BVI-2026-00004',
    'Oluwaseun Adeyemi',
    'oluwaseun.adeyemi@example.com',
    '+44 7944 456789',
    'ILR',
    'Active',
    'Sarah Chen',
    'Has been on Skilled Worker visa for 5 years. Absence record looks clean. Life in the UK test passed March 2026.',
    '$2b$12$AFKkb6jXLYJsxYUkVwFT5.HkHcjqslF9h7wjedWKUOSEGmV.PCl7K',
    false
  )
ON CONFLICT (client_ref) DO NOTHING;

-- 3. Insert documents for BVI-2026-00001 (Priya Sharma - Skilled Worker)
INSERT INTO documents (client_id, document_name, description, category, is_required, status, uploaded_at, rejection_reason)
SELECT
  c.id,
  d.document_name,
  d.description,
  d.category,
  d.is_required,
  d.status,
  d.uploaded_at,
  d.rejection_reason
FROM clients c,
(VALUES
  ('Passport (All Pages)',               'Colour scans of all pages including blank pages.',                              'Identity',   true,  'Approved',      NOW() - INTERVAL '5 days', NULL),
  ('BRP / Current Leave Document',       'Both sides of your current Biometric Residence Permit.',                        'Identity',   true,  'Approved',      NOW() - INTERVAL '5 days', NULL),
  ('Bank Statements (3 months)',         'Official PDF statements from your primary bank account.',                       'Financial',  true,  'Rejected',      NOW() - INTERVAL '3 days', 'Statements must cover a full 3-month period. Please re-upload pages 1–3 which appear to be missing.'),
  ('Payslips (3 months)',                'Most recent three consecutive payslips.',                                       'Employment', true,  'Uploaded',      NOW() - INTERVAL '2 days', NULL),
  ('Employer Letter / Certificate of Sponsorship', 'Confirmation of sponsorship and job details.',                        'Employment', true,  'Not uploaded',  NULL,                      NULL),
  ('TB Test Certificate',                'Valid certificate from an approved TB testing clinic.',                         'Medical',    true,  'Not uploaded',  NULL,                      NULL),
  ('Medical Records / IHS Receipt',      'Immigration Health Surcharge payment confirmation.',                            'Medical',    true,  'Approved',      NOW() - INTERVAL '6 days', NULL),
  ('English Language Certificate',       'Approved English language test certificate (e.g. IELTS).',                     'Other',      false, 'Not uploaded',  NULL,                      NULL)
) AS d(document_name, description, category, is_required, status, uploaded_at, rejection_reason)
WHERE c.client_ref = 'BVI-2026-00001'
ON CONFLICT DO NOTHING;

-- 4. Insert documents for BVI-2026-00002 (Mohammed Al-Rashid - Spouse/Family)
INSERT INTO documents (client_id, document_name, description, category, is_required, status)
SELECT
  c.id,
  d.document_name,
  d.description,
  d.category,
  d.is_required,
  d.status
FROM clients c,
(VALUES
  ('Passport (All Pages)',       'Colour scans of all pages including blank pages.',               'Identity',   true, 'Not uploaded'),
  ('Sponsor''s Passport',        'Colour scans of sponsor''s passport, all pages.',                'Identity',   true, 'Not uploaded'),
  ('Marriage Certificate',       'Original or certified copy with apostille.',                     'Identity',   true, 'Not uploaded'),
  ('Bank Statements (6 months)', '6 months of statements demonstrating the financial requirement.','Financial',  true, 'Not uploaded'),
  ('Sponsor''s Payslips (3 months)', 'Most recent three payslips from sponsor''s employer.',       'Employment', true, 'Not uploaded'),
  ('Proof of Accommodation',     'Tenancy agreement or mortgage statement.',                        'Other',      true, 'Not uploaded'),
  ('Photos Together (dated)',    'Photographs evidencing the relationship.',                        'Other',      true, 'Not uploaded'),
  ('TB Test Certificate',        'Required for UAE nationals — valid clinic certificate.',          'Medical',    true, 'Not uploaded')
) AS d(document_name, description, category, is_required, status)
WHERE c.client_ref = 'BVI-2026-00002'
ON CONFLICT DO NOTHING;

-- 5. Insert documents for BVI-2026-00003 (Yuki Tanaka - Student)
INSERT INTO documents (client_id, document_name, description, category, is_required, status, uploaded_at)
SELECT
  c.id,
  d.document_name,
  d.description,
  d.category,
  d.is_required,
  d.status,
  d.uploaded_at
FROM clients c,
(VALUES
  ('Passport (All Pages)',                'Colour scans of all pages.',                       'Identity',  true,  'Approved', NOW() - INTERVAL '14 days'),
  ('CAS Number / Offer Letter',           'CAS from University of Manchester.',               'Other',     true,  'Approved', NOW() - INTERVAL '14 days'),
  ('Bank Statements (28 consecutive days)','28 consecutive days of maintenance funds.',      'Financial', true,  'Approved', NOW() - INTERVAL '13 days'),
  ('English Language Certificate',        'IELTS Academic 6.5 overall.',                     'Other',     true,  'Approved', NOW() - INTERVAL '12 days'),
  ('TB Test Certificate',                 'Valid certificate — Japan is on the exemption list.','Medical', true,  'Approved', NOW() - INTERVAL '12 days'),
  ('ATAS Certificate',                    'ATAS not required for this course.',               'Other',     false, 'Approved', NOW() - INTERVAL '11 days')
) AS d(document_name, description, category, is_required, status, uploaded_at)
WHERE c.client_ref = 'BVI-2026-00003'
ON CONFLICT DO NOTHING;

-- 6. Insert documents for BVI-2026-00004 (Oluwaseun Adeyemi - ILR)
INSERT INTO documents (client_id, document_name, description, category, is_required, status, uploaded_at)
SELECT
  c.id,
  d.document_name,
  d.description,
  d.category,
  d.is_required,
  d.status,
  d.uploaded_at
FROM clients c,
(VALUES
  ('Passport (All Pages)',            'Current and any previous passports.',               'Identity',   true,  'Approved',     NOW() - INTERVAL '7 days'),
  ('All Previous BRPs',              'All BRPs from the 5-year qualifying period.',        'Identity',   true,  'Approved',     NOW() - INTERVAL '7 days'),
  ('Bank Statements (12 months)',    '12 months of statements.',                           'Financial',  true,  'Uploaded',     NOW() - INTERVAL '2 days'),
  ('Payslips (12 months)',           '12 consecutive monthly payslips.',                   'Employment', true,  'Uploaded',     NOW() - INTERVAL '2 days'),
  ('Tax Returns (if self-employed)', 'Not required — client is employed.',                 'Financial',  false, 'Not uploaded', NULL),
  ('Absence Record',                 'Calculated total absences over 5 years.',            'Other',      true,  'Approved',     NOW() - INTERVAL '5 days'),
  ('Life in the UK Test Certificate','Pass certificate dated March 2026.',                 'Other',      true,  'Approved',     NOW() - INTERVAL '5 days'),
  ('English Language Certificate',   'Degree taught in English counts as exemption.',      'Other',      true,  'Approved',     NOW() - INTERVAL '5 days')
) AS d(document_name, description, category, is_required, status, uploaded_at)
WHERE c.client_ref = 'BVI-2026-00004'
ON CONFLICT DO NOTHING;

-- 7. Insert some test messages for Priya Sharma
INSERT INTO messages (client_id, sender, message_text, is_read)
SELECT c.id, m.sender, m.message_text, m.is_read
FROM clients c,
(VALUES
  ('adviser', 'Welcome to your secure client portal, Priya. Please upload all required documents at your earliest convenience so we can progress your application.', true),
  ('client',  'Thank you. I have uploaded my passport and BRP. I am waiting for my bank to issue the statements — should have them by end of week.', true),
  ('adviser', 'Understood, thank you for the update. Please also ensure the bank statements cover a full 3-month period with all pages included — we have seen some clients miss this.', true),
  ('client',  'Of course, I will make sure of that. Also, do I need the TB certificate even though I have been in the UK for 2 years already?', false),
  ('adviser', 'Yes — the TB certificate is still required as part of the Skilled Worker extension requirements for your nationality. Please book an appointment with an UKHBA-approved clinic.', false)
) AS m(sender, message_text, is_read)
WHERE c.client_ref = 'BVI-2026-00001'
ON CONFLICT DO NOTHING;
